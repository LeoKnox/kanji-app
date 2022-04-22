from django.urls import path
from . import views

urlpatterns = [
    path('', views.KanjiListAPIView.as_view(), name='kanji_list'),
    path('grades', views.KanjiGradeAPIView.as_view(), name='kanji_grades'),
]