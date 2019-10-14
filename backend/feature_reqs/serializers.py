
from rest_framework import serializers
from .models import FeatureRequests, Client, ProductArea

class FrSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureRequests
        fields = ('id','title', 'description', 'client', 'client_priority', 'target_date', 'product_area', 'status')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id','name')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductArea
        fields = ('id','name')
