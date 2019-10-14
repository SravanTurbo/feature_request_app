from django.contrib import admin

# Register your models here.

from .models import Client, ProductArea, FeatureRequests

class clientAdmin(admin.ModelAdmin):
    list_display = ('name','name')

class ProductAreaAdmin(admin.ModelAdmin):
    list_display = ('name','name')

class FrAdmin(admin.ModelAdmin):
    list_display = ('title','client', 'product_area')

admin.site.register(Client, clientAdmin)

admin.site.register(ProductArea, ProductAreaAdmin)

admin.site.register(FeatureRequests, FrAdmin)
