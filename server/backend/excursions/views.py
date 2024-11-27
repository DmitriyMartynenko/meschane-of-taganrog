from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import ExcursionOrder
from .serializers import ExcursionOrderSerializer

class ExcursionOrderViewSet(ModelViewSet):
    queryset = ExcursionOrder.objects.all()
    serializer_class = ExcursionOrderSerializer
