
from rest_framework import serializers
from .models import FeatureRequests, Client, ProductArea

class FrSerializer(serializers.ModelSerializer):
    client_name = serializers.ReadOnlyField(source='client.name')
    product_name = serializers.ReadOnlyField(source='product_area.name')
    class Meta:
        model = FeatureRequests
        fields = ('id','title', 'description', 'client','client_name','client_priority', 'target_date', 'product_area','product_name', 'status')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id','name')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductArea
        fields = ('id','name')
