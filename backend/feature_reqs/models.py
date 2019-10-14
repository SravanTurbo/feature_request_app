from django.db import models

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
    description = models.TextField()
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    client_priority = models.PositiveIntegerField(db_index=True, null=True, blank=True)
    target_date = models.DateField(null=True, blank=True)
    product_area = models.ForeignKey(ProductArea, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def _str_(self):
        return self.title
