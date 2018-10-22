var nombre1 = 5;
        var nombre2 = 3;
        var permute = nombre1;
        nombre1 =nombre2;
        nombre2=permute;
        alert("nombre1: " + nombre1);
        alert("nombre2: " + nombre2);
		// Tapez votre code ici (sans rien modifier d'autre !)
		


        
		/*1.- lire a et b
  2.- c prend la valeur de a
  3.- a prend la valeur de b
  4.- b prend la valeur de c (ancienne valeur de a)     a     b     (c)
  a     b     (a)
  b     b     (a)
  b     a     (a)

  Puis résoudre le même problème sans faire appel à une troisième variable.
  Une suggestion ? La voici :
  1.- lire a et b
  2.- a prend la valeur de a+b
  3.- b prend la valeur de a-b
  4.- a prend la valeur de a-b     a                 b
  a+b             b
  a+b             (a+b)-b=a
  (a+b)-a=b     a*/