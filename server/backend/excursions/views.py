from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ExcursionOrder
from .serializers import ExcursionOrderSerializer

class ExcursionOrderView(APIView):
    def get(self):
        excursions = ExcursionOrder.objects.all()
        serializer = ExcursionOrderSerializer(excursions, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ExcursionOrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # def delete(self, request, )