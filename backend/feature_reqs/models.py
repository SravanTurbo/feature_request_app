from django.db import models
from django.db.models import F

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=120, unique=True)


    def _str_(self):
        return self.name

class ProductArea(models.Model):
    name = models.CharField(max_length=120, unique=True)

    def _str_(self):
        return self.name


class FeatureRequests(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(default=None, null=True, blank= True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE, )
    client_priority = models.PositiveIntegerField(db_index=True, null=True, blank=True)
    target_date = models.DateField(null=True, blank=True)
    product_area = models.ForeignKey(ProductArea, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    class Meta:
        ordering = ('client', 'client_priority')

    def save(self, *args, **kwargs):
        if FeatureRequests.objects.filter(client = self.client, client_priority = self.client_priority):
            FeatureRequests.objects.filter(client = self.client, client_priority__gte = self.client_priority).update(client_priority=F('client_priority')+1)

        super().save(*args, **kwargs)

    def _str_(self):
        return self.title
