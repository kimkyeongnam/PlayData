function random() {
    let ran;
    ran = Math.floor(Math.random() * (3 + 1));
    switch (ran) {
        case 0:
            alert("한식에서 고르세요");
            break;
        case 1:
            alert("일식에서 고르세요");
            break;
        case 2:
            alert("양식에서 고르세요");
            break;
        case 3:
            alert("중식에서 고르세요");
            break;
        default:
            break;
    }
    return ran;
}