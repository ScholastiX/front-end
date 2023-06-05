FROM node:16-alpine AS builder

RUN apk --no-cache -U upgrade
WORKDIR /app

COPY . .
RUN yarn install --production && yarn build

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
