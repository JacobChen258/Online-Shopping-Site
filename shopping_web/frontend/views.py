from django.shortcuts import render

# Create your views here.

# render this template and let react take care
def index(request, *args,**kwargs):
    # this render function takes request and renders the 'frontend/index.html'
    return render(request,'frontend/index.html')