from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExcursionOrderView

urlpatterns = [
    path('', ExcursionOrderView.as_view(), name='excursion-order'),
]