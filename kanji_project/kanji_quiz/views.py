from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .serializers import KanjiListSerializer, KanjiGradeSerializer
from .models import Kanji

@csrf_exempt
def KanjiGradeAPIView(request):
    if request.method == 'GET':
        serializer = Kanji.objects.values('grade').distinct()
        serializer_class = KanjiGradeSerializer(serializer, many=True)
        return JsonResponse(serializer_class.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = KanjiGradeSerializer(data=data)
        if serializer.is_valid():
            print("data")

class KanjiListAPIView(generics.ListAPIView):
    serializer_class = KanjiListSerializer
    def get_queryset(self):
        filter_search = "SELECT * FROM kanji_app_db.kanji_dict WHERE "
        grade = self.kwargs['grade']
        for g in grade:
            filter_search += "grade={} OR ".format(g)
        queryset = Kanji.objects.raw(filter_search[:-3])
        return queryset

'''
class KanjiGradeAPIView(generics.ListAPIView):
    queryset = Kanji.objects.values('grade').distinct()
    serializer_class = KanjiGradeSerializer
    '''

class KanjiGradeGetAPIView(generics.CreateAPIView):
    queryset = Kanji.objects.all()