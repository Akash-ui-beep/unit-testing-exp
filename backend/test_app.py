import json
from app import app

def test_add():
    client = app.test_client()

    response = client.post('/add',
        data=json.dumps({'a': 2, 'b': 3}),
        content_type='application/json'
    )

    data = json.loads(response.data)

    assert response.status_code == 200
    assert data['result'] == 5