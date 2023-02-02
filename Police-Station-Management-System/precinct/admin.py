from django.contrib import admin, messages
from django.db.models.aggregates import Count
from django.utils.html import format_html
from django.utils.http import urlencode
from django.urls import reverse
from . import models


@admin.register(models.Officer)
class OfficerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'badge', 'phone', 'general_duty']
    list_editable = ['general_duty', 'phone']
    list_filter = ['general_duty']
    list_per_page = 10
    ordering = ['first_name', 'last_name']
    search_fields = ['first_name__istartswith',
                     'last_name__istartswith', 'badge', 'id_number']


@admin.register(models.Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    autocomplete_fields = ['recording_officer', 'complainant', 'suspects']
    actions = ['mark_solved', 'mark_cold']
    list_display = ['occurrence_book_number', 'status',
                    'complainant', 'recording_officer', 'placed_at', 'suspects_count']
    list_editable = ['status']
    list_per_page = 10
    list_select_related = ['complainant', 'recording_officer']
    list_filter = ['status', 'placed_at']
    search_fields = ['complainant', 'occurrence_book_number']

    @admin.display(ordering='suspects_count')
    def suspects_count(self, complaint):
        url = (
            reverse('admin:precinct_suspect_changelist')
            + '?'
            + urlencode(
                {
                    'complaint__id': str(complaint.id)
                }))

        return format_html('<a href="{}">{}</a>', url, complaint.suspects_count)

    @admin.action(description="Mark as solved")
    def mark_solved(self, request, queryset):
        updated_count = queryset.update(status="Solved")
        self.message_user(
            request,
            f"{updated_count} complaints were successfully updated.",
            messages.SUCCESS
        )

    @admin.action(description="Mark as cold")
    def mark_cold(self, request, queryset):
        updated_count = queryset.update(status="Cold")
        self.message_user(
            request,
            f"{updated_count} complaints were successfully updated.",
            messages.SUCCESS
        )

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            suspects_count=Count('suspects')
        )


class ComplaintItemInline(admin.StackedInline):
    autocomplete_fields = ['recording_officer', 'suspects']
    model = models.Complaint
    extra = 0
    min_num = 1
    max_num = 5


@admin.register(models.Complainant)
class ComplainantAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'id_number', 'phone', 'age', 'address']
    list_editable = ['phone', 'address']
    list_per_page = 10
    search_fields = ['first_name', 'last_name', 'id_number']


@admin.register(models.Suspect)
class SuspectAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'id_number', 'phone', 'age', 'address']
    list_editable = ['phone', 'address']
    list_per_page = 10
    search_fields = ['id_number', 'first_name', 'last_name']


@admin.register(models.Detective)
class DetectiveAdmin(admin.ModelAdmin):
    list_display = ['complaint',
                    'officer', 'created_at', 'updated_at']
    list_per_page = 10
    search_fields = ['complaint', 'officer']


admin.site.register(models.Lawyer)
admin.site.register(models.MostWanted)
admin.site.register(models.MissingPerson)
admin.site.register(models.BountyHunter)
admin.site.register(models.LastSeen)
