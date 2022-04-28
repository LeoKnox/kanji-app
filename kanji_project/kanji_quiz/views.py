from django.shortcuts import render
from rest_framework import generics
from django_filters import rest_framework as filters
from .serializers import KanjiListSerializer, KanjiGradeSerializer
from .models import Kanji

class KanjiGradeAPIView(generics.ListAPIView):
    queryset = Kanji.objects.values('grade').distinct()
    serializer_class = KanjiGradeSerializer

class KanjiListAPIView(filters.FilterSet):
    queryset = Kanji.objects.all()
    serializer_class = KanjiListSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = {
        'grade': ["exact"]
    }
'''
class KanjiListAPIView(generics.ListAPIView):
    #queryset = Kanji.objects.all().filter(grade=1) | Kanji.objects.all().filter(grade=3)
    serializer_class = KanjiListSerializer

    def get_queryset(self):
        filter_search = ""
        grade = self.kwargs['grade']
        for g in grade:
            filter_search += ("Kanji.objects.filter(grade={}) | ".format(g))
        gradex = Kanji.objects.all().filter(*grade)
        queryset = Kanji.objects.all().filter(grade=1)
        grades = exec(filter_search[0:-3])
        print(gradex)
        return Kanji.objects.filter(grade=3)
'''

'''
class KanjiListAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all().filter(grade=1)
    #queryset = Kanji.objects.all().filter(grade=1) | Kanji.objects.all().filter(grade=3)
    serializer_class = KanjiListSerializer
'''