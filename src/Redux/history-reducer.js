export let AddDialogActionCreator = () => {
    return { type: "AddDialog" }
}
export let UpgradeHistoryTextActionCreator = (text) => {
    return { type: 'UpgradeHistoryText', data: text }
}

let initialState = {
    DialogsMessage: [],
    DialogsData:
        [
            { id: 1, name: 'Kolya', img: 'https://i05.fotocdn.net/s121/e48f85312ecd4841/user_l/2761870444.jpg' },
            { id: 2, name: 'Maxim', img: "https://avatars.mds.yandex.net/get-pdb/1732919/f8a3fbfa-3fe2-4040-aa79-706e08e54a94/s1200?webp=false" },
            { id: 3, name: 'Lera', img: 'https://s1.1zoom.ru/b5050/5/143910-jugra_1600x1200.jpg' },
            { id: 4, name: 'Stas', img: 'https://avatars.mds.yandex.net/get-pdb/38069/47ceaeff-046f-4756-820f-1c2cc9e0ae2c/s1200' },
            { id: 5, name: 'Lada', img: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200' },
            { id: 6, name: 'Maxim', img: 'https://w-dog.ru/wallpapers/4/17/562770035380737/paren-model-letchik-kostyum-ochki.jpg' }
        ],
    NewHistoryText: ""
}

export const HistoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'AddDialog':
            let i = 0;
            return {
                ...state,
                DialogsMessage: [...state.DialogsMessage, { id: i++, message: state.NewHistoryText }]
            };
        case 'UpgradeHistoryText':
            return {
                ...state,
                NewHistoryText: action.data
            };
        default: return state;
    }

}

