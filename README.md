### Get person:

`GET /person` (no authentication required): gets all people.

### Get person by id:

`GET /person/:firstName` (no authentication required): gets information from specific person.

### Create a new person:

`POST /person` (no authentication required): creates a new person.

#### Body example:

```
{
	"firstName": "Matheus",
	"secondName": "Castro",
	"birthday": "1996-06-23",
	"phones": [
		{
			"phoneName": "Casa",
			"phoneNumber": "35529999"
		},
		{
			"phoneName": "Trabalho",
			"phoneNumber": "35528888"
		}
	]
}
```

### Update person by id:

`PUT /person/:id` (no authentication required): update data for a specific person.

#### Body example:

```
{
	"firstName": "João",
	"secondName": "Gomes",
}
```

### Remove a person:

`DELETE /person/:id` (no authentication required): removes a person.
