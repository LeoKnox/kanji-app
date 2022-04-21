from django.db import models

class Kanji(models.Model):
    kanji = models.CharField(max_length=50, blank=False)
    strokes = models.IntegerField()
    meaning = models.CharField(max_length=200, blank=True)
    pronounciation = models.CharField(max_length=200, blank=True)
    grade = models.IntegerField()

    def __str__(self):
        return "{}: {} grade:{}".format(self.kanji, self.meaning, self.grade)