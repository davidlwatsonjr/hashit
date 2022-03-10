# Hashit!

This is a small hashing app I wrote to quickly hash files. It includes a web API as well as a web app front-end.

## Web app

The web app front-end is currently deployed to [https://hashit.davidlwatsonjr.com/](https://hashit.davidlwatsonjr.com/).

## Web API

The web API is also at [https://hashit.davidlwatsonjr.com/](https://hashit.davidlwatsonjr.com/). It simply requires submitting the file as a `multipart/form-data` `POST` request with the `file` field. An optional `algorithm` field can be used in the body of the `POST` request or as a query parameter to specify the hashing algorithm to use. If not supplied, the default algorithm is `sha256`.

### Example (cUrl on Windows)

Hashing myfile.txt with sha256:
`curl -F "file=@myfile.txt" https://hashit.davidlwatsonjr.com`

Hashing myfile.txt with md5:
`curl -F "file=@myfile.txt" https://hashit.davidlwatsonjr.com/?algorithm=md5`

## Source code

The source code can be found at [https://github.com/davidlwatsonjr/hashit](https://github.com/davidlwatsonjr/hashit).

### Local development

*TODO* Instructions on running locally using Docker to be added here.
