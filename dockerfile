#Sua imagem vai ser construída a partir daqui

FROM node:alpine

#Escolher um diretório de trabalho

WORKDIR /usr/src

#Copiar o conteúdo do projeto para dentro dessa pasta
#Copia do meu computador para a pasta WORKIR

COPY . .

#Baixar as deps

RUN npm i

#fazer o buid

RUN npm run build
#(opcional) Dizer em qual porta vai funcionar o projeto
EXPOSE 5000

#preciso configurar qual o "comando inicial" para o container funcionar

CMD ["npm", "start"]

# Para fazer uma imagem dockerizada da minha aplicação backend rodar [docker build -t <nomeQlqdaImagem> .]
# Para criar o container e fazer a comunicação entre os container
## docker run -d -p 5000:5000 --name wilkerbackend --network mynetwork -e DATABASE_URL=postgresql://postgres:postgres@mypostgres:5432/mydb wilkerbackend