# FROM buildkite/puppeteer:10.0.0 as react-build

# ARG REACT_APP_API_BASE_URL
# COPY web /opt/web
# WORKDIR /opt/web
# RUN npm ci --only=production && npm run build


FROM node:16.18-alpine3.15

COPY api /opt/api
WORKDIR /opt/api
RUN npm ci --only=production 

# COPY --from=react-build /opt/web/build /opt/api/react-app

EXPOSE 3100

CMD ["npm","start"]