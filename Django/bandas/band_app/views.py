from django.shortcuts import render

# Create your views here.

def raiz(request):
    return render(request, "index.html")