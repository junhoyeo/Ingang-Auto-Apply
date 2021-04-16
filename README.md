# 인강 자동 신청

## Idea
인강 신청 시작 시간이 아침 베네듀나 영어 학습 활동과 겹쳐서 꼭 인강실을 사용해야 하는 날의 경우 공부에 집중하기 어렵다.

- 디미고인 API를 사용해, 아침 8시 30분이 되면 자동으로 인강 신청을 시도한다(2, 3타임만).
- 신청을 놓친 경우 1초마다 (다른 학생이 드랍한) 인강을 '줍는' 것을 서비스에 지장이 없는 범위 내에서 잠깐 동안 시도한다.

## Usage

### secret.json 설정
```json
{
  "id": "디미고인 아이디",
  "password": "디미고인 패스워드"
}
```

### 단일 신청 
특정 타임의 인강실 신청을 시도한다.

`-i IDX, --idx IDX`

`IDX`: 신청할 인강실의 index(1타임의 경우 0, 2~3타임의 경우 1)

### 모두 신청
해당 날짜의 1타임, 2~3타임 모두 신청을 시도한다.

`-p PERFER, --perfer PERFER`

`PERFER`: 우선적으로 신청할 인강실의 index(1타임의 경우 0, 2~3타임의 경우 1)
