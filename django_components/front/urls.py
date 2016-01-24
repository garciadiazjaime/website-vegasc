from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    #### MAIN VIEW
    url(r'^$', 'django_components.front.views.index', name='index'),
    

    #### LAYOUT VIEWS

    url(r'^header$', 'django_components.front.views.header', name='header'),
    url(r'^main$', 'django_components.front.views.main', name='main'),
    url(r'^footer$', 'django_components.front.views.footer', name='footer'),
    
    #### SECTION VIEWS
    url(r'^home$', 'django_components.front.views.home', name='home'),
    url(r'^aboutus$', 'django_components.front.views.aboutus', name='aboutus'),
        url(r'^aboutus/who-we-are$', 'django_components.front.views.aboutus.whoweare', name='aboutus.whoweare'),
        url(r'^aboutus/our-team$', 'django_components.front.views.aboutus.ourteam', name='aboutus.ourteam'),
    url(r'^whatwedo$', 'django_components.front.views.whatwedo', name='whatwedo'),
        url(r'^whatwedo/civil-litigation$', 'django_components.front.views.whatwedo.civillitigation', name='whatwedo.civillitigation'),
        url(r'^whatwedo/cross-border-law$', 'django_components.front.views.whatwedo.crossborderlaw', name='whatwedo.crossborderlaw'),
        url(r'^whatwedo/field-action$', 'django_components.front.views.whatwedo.fieldaction', name='whatwedo.fieldaction'),
    url(r'^contact$', 'django_components.front.views.contact', name='contact'),
    url(r'^terms-conditions$', 'django_components.front.views.terms', name='terms'),

    #### SECTION BLOCKS
    url(r'^success$', 'django_components.front.views.modal_success', name='modal_success'),
    url(r'^error$', 'django_components.front.views.modal_error', name='modal_error'),

)
