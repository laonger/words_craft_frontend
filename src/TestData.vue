<script charset="utf-8">
export default {
    name: 'testData',
    data() {
        return {
            'players': {
                'own': {
                    'id': 'nnnn',
                    'name': '我'
                },
                'other': {
                    'id': 'aaa',
                    'name': '你'
                }
            },
            'words': [
                {
                    'word': 'apple',
                    'chinese': [
                        '苹果',
                        '香蕉',
                        '李子',
                        '梨',
                        '没有正确答案'
                    ],
                    'answer': 0
                },
                {
                    'word': 'school',
                    'chinese': [
                        '学校',
                        '大学',
                        '日记',
                        '汽车',
                        '没有正确答案'
                    ],
                    'answer': 0
                }
            ]
        }
    }
}
</script>
