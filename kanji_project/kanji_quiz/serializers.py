from rest_framework import serializers
from .models import Kanji

class KanjiListSerializer(seriailzers.ModelSerializer):
    class Meta:
        model = Kanji = [
            'id',
            'kanji',
            'strokes',
            'meaning',
            'pronounciation',
            'grade',
        ]