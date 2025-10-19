from django.db import models


class Universities(models.Model):
    university_id = models.AutoField(primary_key=True)
    name = models.CharField(unique=True, max_length=100)
    location = models.CharField(max_length=100, blank=True, null=True)
    district = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    contact_email = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    website = models.CharField(max_length=255, blank=True, null=True)
    logo = models.CharField(max_length=255, blank=True, null=True)
    ugc_ranking = models.IntegerField(blank=True, null=True)
    is_active = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'universities'


class Faculties(models.Model):
    faculty_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    contact_email = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    website = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'faculties'


class UniversityAnnouncements(models.Model):
    announcement_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)
    title = models.CharField(max_length=255)
    message = models.TextField(blank=True, null=True)
    announcement_type = models.CharField(max_length=8, blank=True, null=True)
    valid_from = models.DateField(blank=True, null=True)
    valid_to = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'university_announcements'


class UniversityEvents(models.Model):
    event_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    event_type = models.CharField(max_length=8, blank=True, null=True)
    event_date = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'university_events'


class UniversityServices(models.Model):
    service_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    service_type = models.CharField(max_length=15, blank=True, null=True)
    contact_email = models.CharField(max_length=100, blank=True, null=True)
    contact_phone = models.CharField(max_length=50, blank=True, null=True)
    advertised_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'university_services'


class UniversityDashboardAdmin(models.Model):
    """Stores editable content for the University admin dashboard page.

    Using JSONField enables flexible, versionable structures similar to the
    companies app's CompanyDashboardEdit model.
    """
    dashboard_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)

    # Simple hero (optional)
    hero_title = models.CharField(max_length=255, blank=True, null=True)
    hero_subtitle = models.TextField(blank=True, null=True)

    # Sections as JSON for easy partial updates from the frontend
    # list of {id,label,value,iconKey,trend}
    stats = models.JSONField(default=list)
    # list of quick action cards
    quick_actions = models.JSONField(default=list)
    recent_activities = models.JSONField(
        default=list)  # list of recent activity items
    # list of {id,label,value}
    metrics = models.JSONField(default=list)
    # list of {id/name,status,uptime}
    statuses = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'university_dashboard_admin'


class UniversityDashboardA(models.Model):
    """New table for University dashboard editable content.

    Mirrors UniversityDashboardAdmin structure but stored in table
    named exactly 'university_dashboard_A' per requirement.
    """
    dashboard_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)

    hero_title = models.CharField(max_length=255, blank=True, null=True)
    hero_subtitle = models.TextField(blank=True, null=True)

    stats = models.JSONField(default=list)
    quick_actions = models.JSONField(default=list)
    recent_activities = models.JSONField(default=list)
    metrics = models.JSONField(default=list)
    statuses = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'university_dashboard_A'


class UniversityManagePortfolio(models.Model):
    """Stores editable content for the University Manage Portfolio page.
    Uses JSON fields for flexible content blocks similar to company patterns.
    """
    portfolio_id = models.AutoField(primary_key=True)
    university = models.ForeignKey(Universities, models.DO_NOTHING)

    # {name, established, motto, location, type, chancellor, vicechancellor, students, faculty, campuses}
    university_info = models.JSONField(default=dict)
    # list of {year, title, rank, description}
    achievements = models.JSONField(default=list)
    # list of {year, worldRank, localRank, score}
    ranking_history = models.JSONField(default=list)
    # list of {name, established, departments[], students, programs[]}
    faculties = models.JSONField(default=list)
    # list of {level, count, duration}
    degree_programs = models.JSONField(default=list)
    # list of {id, title, date, type, description, image}
    recent_events = models.JSONField(default=list)
    # list of {name, description, icon}
    facilities = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'manage_portfolio'
