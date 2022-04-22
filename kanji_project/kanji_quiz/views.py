from django.shortcuts import render
from rest_framework import generics
from .serializers import KanjiListSerializer, KanjiGradeSerializer
from .models import Kanji

class KanjiListAPIView(generics.ListAPIView):
    print(Kanji.objects.values('grade').distinct())
    queryset = Kanji.objects.all().filter(grade=1)
    #queryset = Kanji.objects.all().filter(grade=1) | Kanji.objects.all().filter(grade=3)
    serializer_class = KanjiListSerializer