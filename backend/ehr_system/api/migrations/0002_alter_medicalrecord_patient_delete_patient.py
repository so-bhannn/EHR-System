# Generated by Django 5.0.2 on 2025-02-06 20:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicalrecord',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='record', to='accounts.patient'),
        ),
        migrations.DeleteModel(
            name='Patient',
        ),
    ]
