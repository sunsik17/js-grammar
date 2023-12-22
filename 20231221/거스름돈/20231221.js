/*
 * ???? �ʵ� ????
 * - �Լ� ��� ���ο��� �ۼ����ּ���.
 * - ������� return �ϼ���.
 * - �߰����� test�� �ʿ��� ��쿡�� ���� test �ڵ� �ؿ� �߰����ּ���.
 * - �ڵ� ���� �� ��� �׽�Ʈ�� true�� ��� ����Դϴ�!
 */

/* ���� ����
 *
 *   ? �Ž����� ����ϱ�
 * - 3000�� ¥�� ���߸� ����� �Ѵ�!
 * - n���� ���߸� �� �� w���� �� ��� �Ž��� ���� ������ּ���.
 * - ��, ���߰����� ���� �� ���� �ʴ´�.
 */

function question(n, w) {
    // ���⿡�� �ڵ� �ۼ����ּ���!
    const cabbage = 3000;

    let result = w - (cabbage * n);
    
    return result;
}

// ����� ����� �Լ��̹Ƿ� �Ű澲�� �����ŵ� �˴ϴ�!
Test(
    question,
    [
        [1, 7000],
        [2, 12340],
        [3, 34560],
        [4, 78890],
        [5, 453400],
        [6, 5634500],
    ],
    [4000, 6340, 25560, 66890, 438400, 5616500]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === results[index];
        console.log(`�׽�Ʈ ${+index + 1}`, result);
        if (!result) {
            console.log('�׽�Ʈ�� ������� ���߽��ϴ�.');
            return;
        }
    }

    console.log('�׽�Ʈ�� ����ϼ̽��ϴ�!');
}