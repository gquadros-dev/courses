void main(){
  int idade = 26; // tenho como criar variável vazia "int idade"
  // tem como trabalhar com hexadecimal (26 = 0x00001A)
  double altura = 1.78;
  // com double pode ser usar exponenciais
  // double distancia_terra_sol = 1.496e5

  bool geek = true; // bool teste = (idade == altura);

  String nome = 'Gabriel';
  String apelido = 'Biel';

  print(idade);
  print(altura);
  print(geek);
  print('Eu sou $apelido mas meu nome completo '
  'é: $nome, eu me considero geek? $geek. '
  'Eu tenho $altura metros de altura e $idade anos de idade');

  // artigo para ler conversão de tipos: https://medium.com/dart-school-by-kmranrg/chapter-3-type-casting-in-dart-76837475772a
}