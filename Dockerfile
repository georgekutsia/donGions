FROM buildkite/puppeteer:10.0.0 as react-build
# LAS LINEAS DEL ENV ESTAN BLOQUEADAS PARA EL RAILWAY, PARA HACERLO EN LOCAL DESCOMENTAR LOS ENV
# ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyDyU4YFDQlA5r3nElQvVMAtJHs9LRVucHU" REACT_APP_API_BASE_URL="http://localhost:4001/api/v1" MONGODB_URI="mongodb+srv://LuisEUM:0bvwrdrXRENbO4fC@toprestaurant.nh5otgj.mongodb.net/?retryWrites=true&w=majority" CLOUDINARY_URL="cloudinary://937733417757663:B0Od4-yXubSZR8ox8lMWPrfAPNk@luiseum"

ARG REACT_APP_API_BASE_URL
COPY web /opt/web
WORKDIR /opt/web
RUN npm ci --only=production && npm run build


FROM node:16.18-alpine3.15
# ENV MONGODB_URI="mongodb+srv://LuisEUM:0bvwrdrXRENbO4fC@toprestaurant.nh5otgj.mongodb.net/?retryWrites=true&w=majority" CLOUDINARY_URL="cloudinary://937733417757663:B0Od4-yXubSZR8ox8lMWPrfAPNk@luiseum"  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyDyU4YFDQlA5r3nElQvVMAtJHs9LRVucHU" REACT_APP_API_BASE_URL="http://localhost:4001/api/v1"

COPY api /opt/api
WORKDIR /opt/api
RUN npm ci --only=production 

COPY --from=react-build /opt/web/build /opt/api/react-app

EXPOSE 3100

CMD ["npm","start"]