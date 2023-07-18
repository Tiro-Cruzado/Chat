# Rest API

## Generate user avatar

    GET /user/generateAvatar?name=<NAME>

Given the required `name` parameter, returns a svg image with a random style.

## Create User

    PUT /user/create

    {
        "name": <USERNAME>,
        "image": <IMAGE_SVG>
    }

Returns the id of the created user. Example:

    { "userId": "9eb3d52c-9a1c-4944-8e1a-b4e7d292c983" }
