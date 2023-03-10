# Generated by Django 4.1.3 on 2022-11-29 11:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("precinct", "0003_missingpersonimage"),
    ]

    operations = [
        migrations.AlterField(
            model_name="missingpersonimage",
            name="image",
            field=models.ImageField(upload_to="precinct/images/missing-persons"),
        ),
        migrations.CreateModel(
            name="MostWantedImage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="precinct/images/most-wanted")),
                (
                    "most_wanted_person",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="images",
                        to="precinct.mostwanted",
                    ),
                ),
            ],
        ),
    ]
