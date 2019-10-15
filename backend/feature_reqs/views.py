from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FrSerializer, ClientSerializer, ProductSerializer
from .models import FeatureRequests, Client, ProductArea

# Create your views here.
class FrView(viewsets.ModelViewSet):
    serializer_class = FrSerializer
    queryset=FeatureRequests.objects.all()

class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = ProductArea.objects.all()
