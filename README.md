# �^�X�N�Ǘ��A�v��
## ER�}
�� ����NotNull��\���B
![ER�}](images/er-figure-screenshot-v2.png)

### users

| �J������ | �f�[�^�^ | �_���� | ���l |
| - | - | - | - |
| id | integer | ID |  |
| name | string | ���[�U�[�� |  |
| email | string | ���[���A�h���X |  |
| psasword | string | �p�X���[�h |  |
| role_id | integer | ���[��ID |  |

### tasks

| �J������ | �f�[�^�^ | �_���� | ���l |
| - | - | - | - |
| id | integer | ID |  |
| title | string | �^�C�g�� |  |
| detail | text | �ڍ� |  |
| deadline | date | ���� |  |
| user_id | integer | ���[��ID |  |
| status_id | integer | �X�e�[�^�XID|  |

### roles

| �J������ | �f�[�^�^ | �_���� | ���l |
| - | - | - | - |
| id | integer | ID |  |
| name | string | ���[���� |  |

### statuses

| �J������ | �f�[�^�^ | �_���� | ���l |
| - | - | - | - |
| id | integer | ID |  |
| name | string | �X�e�[�^�X�� | |]

## ��ʃC���[�W
![��ʃC���[�W](images/figjam-screenshot.png)