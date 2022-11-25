function login() {
	alert('로그인이 필요하지 않아요 :)');
}

function signup() {
	alert('회원가입이 필요하지 않아요 :)');
}

function findTopic() {
	const topic = document.querySelector('.topic');
	const btn = document.querySelector('.btn');
	topic.innerText = '··· 일기 주제를 찾고 있어요 ···';
	btn.setAttribute('disabled', true);

	const rand = Math.floor(Math.random() * topics.length);
	const randomTopic = topics[rand];

	setTimeout(function () {
		topic.innerText = randomTopic;
		btn.removeAttribute('disabled');
	}, 3000);
}

const topics = [
	'#001 순도 99.99%의 순금 똥을 쌌다',
	'#002 바닷물을 달콤하게 해 달라고 신을 설득하는 편지',
	'#003 학교에서 친구들에게 들키지 않고 방귀를 뀌는 방법',
	'#004 학교에서 배우지 않아서 아쉬운 것',
	'#005 내 인생 최초의 거짓말',
	'#006 수업 시간에 짜장면을 먹을 수 있는 방법',
	'#007 내가 얻고 싶은 초능력',
	'#008 나는 이럴 때 소소한 행복을 느낀다',
	'#009 유치원과 학교의 다른 점',
	'#010 선생님께서 자주 하시는 말씀 Best 3',
];