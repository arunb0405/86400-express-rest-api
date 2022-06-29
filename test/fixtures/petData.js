
export const params = {
    petApiBaseUrl: 'https://petstore.swagger.io/v2',
    petObj: {
        "id": 1990,
        "category": {
            "id": 100,
            "name": "Australian Pet"
        },
        "name": "Kangaroo",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "Hopping"
    }
};

export const petSchema = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      },
      "name": {
        "type": "string"
      },
      "photoUrls": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "tags": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          }
        ]
      },
      "status": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "category",
      "name",
      "photoUrls",
      "tags",
      "status"
    ]
  };