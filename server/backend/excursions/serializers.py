from rest_framework.serializers import ModelSerializer
from .models import ExcursionOrder

class ExcursionOrderSerializer(ModelSerializer):
    class Meta:
        model = ExcursionOrder
        fields = '__all__'
        