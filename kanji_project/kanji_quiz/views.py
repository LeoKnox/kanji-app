from django.shortcuts import render
from rest_framework import generics
from .serializers import KanjiListSerializer, KanjiGradeSerializer
from .models import Kanji

class KanjiGradeAPIView(generics.ListAPIView):
    queryset = Kanji.objects.values('grade').distinct()
    serializer_class = KanjiGradeSerializer

class KanjiListAPIView(generics.ListAPIView):
    serializer_class = KanjiListSerializer
    def get_queryset(self):
        filter_search = "SELECT * FROM kanji_app_db.kanji_dict WHERE "
        grade = self.kwargs['grade']
        for g in grade:
            filter_search += "grade={} OR ".format(g)
        queryset = Kanji.objects.raw(filter_search[:-3])
        return queryset