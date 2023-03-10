generate-front-api: 
	rm -rf front/src/@codegen/api
	docker run --platform linux/amd64 --rm -v ${PWD}:/app openapitools/openapi-generator-cli:v6.0.0 generate -i /app/docs/openapi.yml -g typescript-axios -o /app/front/src/@codegen/api -c /app/docs/front_generate_config.yml