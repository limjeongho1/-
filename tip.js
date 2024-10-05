function toggleBox(boxNumber) {
    var container = document.getElementById("container" + boxNumber);
    var existingBox = document.getElementById("toggleBox" + boxNumber);
    if (existingBox) {
        // 박스가 이미 있으면 제거
        container.removeChild(existingBox);
    } else {
        // 박스가 없으면 생성
        var box = document.createElement("div");function toggleBox(boxNumber) {
            var container = document.getElementById("container" + boxNumber);
            var existingBox = document.getElementById("toggleBox" + boxNumber);
            
            // 버튼 클릭 시 색상 변경
            if (boxNumber === 1) {
                button.style.backgroundColor = '#88c0bc'; // 클릭 시 파스텔 초록색
            } else if (boxNumber === 2) {
                button.style.backgroundColor = '#ff9999'; // 클릭 시 파스텔 핑크색
            } else if (boxNumber === 3) {
                button.style.backgroundColor = '#ffcc80'; // 클릭 시 파스텔 오렌지색
            } else if (boxNumber === 4) {
                button.style.backgroundColor = '#8da0f7'; // 클릭 시 파스텔 블루색
            }
        
            if (existingBox) {
                // 박스가 이미 있으면 제거
                container.removeChild(existingBox);
            } else {
                // 박스가 없으면 생성
                var box = document.createElement("div");
                box.className = "box";
                box.id = "toggleBox" + boxNumber;  // 나중에 찾기 쉽게 ID 부여
                
                // 박스 안에 표시할 텍스트
                var text;
                if (boxNumber == 1) {
                    text = document.createTextNode("여기는 북악관입니다.");
                } else if (boxNumber == 2) {
                    text = document.createTextNode("여기는 청운관입니다.");
                } else if (boxNumber == 3) {
                    text = document.createTextNode("여기는 유담관입니다.");
                } else if (boxNumber == 4) {
                    text = document.createTextNode("여기는 혜인관입니다.");
                }
        
                // 텍스트를 박스에 추가
                box.appendChild(text);
        
                // 생성된 박스를 컨테이너에 추가
                container.appendChild(box);
            }
        }
        
        box.className = "box";
        box.id = "toggleBox"+boxNumber;  // 나중에 찾기 쉽게 ID 부여
        if (boxNumber === 1) {
            text = document.createTextNode("여기는 북악관입니다.");
            box.style.backgroundColor = '#a8d5ba'; // 박스 배경색 파스텔 초록색
        } else if (boxNumber === 2) {
            text = document.createTextNode("여기는 청운관입니다.");
            box.style.backgroundColor = '#ffb3ba'; // 박스 배경색 파스텔 핑크색
        } else if (boxNumber === 3) {
            text = document.createTextNode("여기는 유담관입니다.");
            box.style.backgroundColor = '#ffcc99'; // 박스 배경색 파스텔 오렌지색
        } else if (boxNumber === 4) {
            text = document.createTextNode("여기는 혜인관입니다.");
            box.style.backgroundColor = '#c1c6ff'; // 박스 배경색 파스텔 블루색
        }


        // 텍스트를 박스에 추가
        box.appendChild(text);

        // 생성된 박스를 컨테이너에 추가
        container.appendChild(box);
    }
}

