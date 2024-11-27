from rest_framework import serializers
from .models import ExcursionOrder

class ExcursionOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExcursionOrder
        fields = '__all__'
        