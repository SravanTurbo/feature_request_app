# Generated by Django 2.2.6 on 2019-10-16 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feature_reqs', '0004_auto_20191016_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featurerequests',
            name='description',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]
