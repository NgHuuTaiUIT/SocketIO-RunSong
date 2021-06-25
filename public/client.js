var socket = io.connect('http://192.168.1.3:3000');
//var socket = io.connect('http://localhost:8000/');
socket.on('connect', function (data) {
    socket.emit('join', 'Hello server from client');
});

var str = [
    {
      "id": "34",
      "name": "Save Your Tears",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/theweeknd1.jpg",
      "singer": "The Weeknd-Ariana Grande",
      "link": "https://imusicapi.000webhostapp.com/Music/Save%20Your%20Tears%20-%20The%20Weeknd_%20Ari.mp3",
      "like": "200",
      "lyric": "Yeah\\nI saw you dancing in a crowded room\\nYou look so happy when I'm not with you\\nBut then you saw me, caught you by surprise\\nA single teardrop falling from your eye\\nI don't know why I run away\\nI'll make you cry when I run away\\nYou could have asked me why I broke your heart\\nYou could've told me that you fell apart\\nBut you walked past me like I wasn't there\\nAnd just pretended like you didn't care\\nI don't know why I run away\\nI'll make you cry when I run away\\nTake me back 'cause I wanna stay\\nSave your tears for another\\nSave your tears for another day\\nSave your tears for another day\\nSo I made you think that I would always stay\\nI said some things that I should never say\\nYeah, I broke your heart like someone did to mine\\nAnd now you won't love me for a second time\\nI don't know why I run away\\nOh girl, I make you cry when I run away\\nGirl, take me back 'cause I wanna stay\\nSave your tears for another\\nI realize that I'm much too late\\nAnd you deserve someone better\\nSave your tears for another day (ooh, yeah)\\nSave your tears for another day (yeah)\\nI don't know why I run away\\nI'll make you cry when I run away\\nSave your tears for another day, ooh girl (ah)\\nI said save your tears for another day, yeah (ah)\\nSave your tears for another day (ah)\\nSave your tears for another day (ah)\\n",
      "mvcode": null
    },
    {
      "id": "23",
      "name": "Muộn rồi mà sao còn",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/sontungmtp.jpg",
      "singer": "Sơn Tùng M-TP",
      "link": "https://imusicapi.000webhostapp.com/Music/Muon%20Roi%20Ma%20Sao%20Con%20-%20Son%20Tung%20M-TP.mp3",
      "like": "100",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": "xypzmu5mMPY"
    },
    {
      "id": "33",
      "name": "Xin đừng nhấc máy",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/bray.png",
      "singer": "B Ray-Han Sara",
      "link": "https://imusicapi.000webhostapp.com/Music/Xin%20Dung%20Nhac%20May%20-%20B%20Ray_%20Han%20Sara_%20Gre.mp3",
      "like": "90",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "2",
      "name": "Nàng thơ",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/hoangdung.jpg",
      "singer": "Hoàng Dũng",
      "link": "https://imusicapi.000webhostapp.com/Music/Nang%20Tho%20-%20Hoang%20Dung.mp3",
      "like": "80",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "10",
      "name": "Đi về nhà",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/denvau.jpg",
      "singer": "Đen Vâu-JustaTee",
      "link": "https://imusicapi.000webhostapp.com/Music/Di%20Ve%20Nha%20-%20Den_%20JustaTee.mp3",
      "like": "70",
      "lyric": "Đường về nhà là vào tim ta\\nDẫu nắng mưa gần xa.\\nThất bát, vang danh\\nNhà vẫn luôn chờ ta.\\nĐường về nhà là vào tim ta\\nDẫu có muôn trùng qua.\\nVật đổi, sao dời\\nNhà vẫn luôn là nhà.\\nLao vào đời mà kiếm cơm, lao vào đời tìm cơ hội\\nNhững thành thị thường lấp lánh, còn đêm thành thị thường trơ trọi\\nNhư mọi đứa trẻ khác, lớn lên muốn đi xa hoài\\nNhà thì vẫn ở yên đó, đợi những đứa con đang ra ngoài\\n Bước ra ngoài mới biết, không ở đâu bằng ở nhà\\nBiết có gì để mất, trước khi sẵn sàng mở quà\\n Không phải là võ sĩ nhưng mà phải giỏi đấu đá\\n Nhiều khi kiệt sức chỉ vì gắng giữ mình không xấu xa\\n Đôi lúc bỗng thấy đồng cảm với Mai An Tiêm\\n Bước chân ra là sóng gió, chỉ có nhà mãi an yên\\n Ngoài kia phức tạp, như rễ má và dây mơ\\n Về nhà để có lúc cho phép mình được ngây thơ\\n Mang theo bao nao nức lên chiếc xe này\\nTrọn một niềm thao thức suốt những đêm ngày\\nCùng dòng người trên phố, mang sắc mai hương đào\\nTìm về nơi ấm êm.\\nĐường về nhà là vào tim ta,\\nDẫu nắng mưa gần xa.\\nThất bát, vang danh\\nNhà vẫn luôn chờ ta.\\nĐường về nhà là vào tim ta\\nDẫu có muôn trùng qua.\\nVật đổi, sao dời,\\nNhà vẫn luôn là nhà.\\nVề ngôi nhà, có góc vườn nhiều chó nhiều gà\\n Đám bạn nói con khó chiều\\nVà lại thích gió trời hơn gió điều hoà\\nVề ăn cơm mẹ nấu, về mặc áo mẹ may\\nVề đưa ba ra chợ, mua cây đào cây mai về bày\\n Cả năm trời làm việc nhiều khi rã rời như cái máy\\n Về nhà thấy áp lực nhẹ như bấc thổi cái là bay\\n Ấm êm hơn bếp lửa, ngọt bùi hơn lúa non\\n Nhà vẫn luôn ở đó, mong chờ những đứa con\\nDẫu cho mưa cho nắng, không bao giờ nề hà\\n Hạnh phúc chỉ đơn giản, là còn được về nhà\\n Hạnh phúc, đi về nhà\\nCô đơn, đi về nhà\\nThành công, đi về nhà\\nThất bại, đi về nhà\\nMệt quá, đi về nhà\\nMông lung, đi về nhà\\nChênh vênh, đi về nhà\\nKhông có việc gì, vậy thì đi về nhà.\\nKhông có việc gì, vậy thì đi về nhà.\\n…đi về nhà, đi về nhà.\\nĐường về nhà là vào tim ta\\nDẫu nắng mưa gần xa.\\nThất bát, vang danh\\nNhà vẫn luôn chờ ta.\\nĐường về nhà là vào tim ta\\nDẫu có muôn trùng qua.\\nVật đổi, sao dời\\nNhà vẫn luôn là nhà.\\nNhà có thể lớn, có thể nhỏ, có thể không khang trang\\nCha mẹ nào cũng muốn con được sống đàng hoàng\\nLớn lên làm người mong một tương lai xán lạn\\nCặm cụi cả đời không bao giờ thấy than van\\nĐường về nhà là vào tim ta\\nDẫu nắng mưa gần xa.\\nThất bát, vang danh\\nNhà vẫn luôn chờ ta.\\nĐường về nhà là vào tim ta\\nDẫu có muôn trùng qua.\\nVật đổi, sao dời\\nNhà vẫn luôn là nhà.\\n",
      "mvcode": null
    },
    {
      "id": "1",
      "name": "Hongkong1",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/nguyentrongtai.jpg",
      "singer": "Nguyễn Trọng Tài",
      "link": "https://imusicapi.000webhostapp.com/Music/hongkong1.mp3",
      "like": "60",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "25",
      "name": "Sài Gòn đau lòng quá",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/huakimtuyen.jpg",
      "singer": "Hứa Kim Tuyền-Hoàng Duyên",
      "link": "https://imusicapi.000webhostapp.com/Music/Sai%20Gon%20Dau%20Long%20Qua%20-%20Hua%20Kim%20Tuyen_%20Ho.mp3",
      "like": "50",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "13",
      "name": "Giá như",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/chillies.jpg",
      "singer": "Chillies",
      "link": "https://imusicapi.000webhostapp.com/Music/Gia%20Nhu%20-%20Chillies.mp3",
      "like": "40",
      "lyric": "Verse 1\\nGiá như không phải nói một câu giá như\\nTrái tim này tặng em từ đầu được chứ\\nThấy những khung hình quay đều như cuốn phim\\nThấy em sao buồn tênh lặng lẽ đi tìm\\nPre\\nTa như loay hoay giữa 4 bức tường\\nTa như soi thân trong tấm gương kia thật lâu, (that lau) thật sâu\\nChorus\\nXin em thôi về trong những giấc mơ đêm nay\\nHôn đôi môi lạnh giá\\nVề lại trong những khung hình\\nGiờ đã trôi rất xa\\nĐừng về trong những giấc mơ đêm nay\\nKhi đã lỡ một dấu chấm hết cho vơi đi, vơi nỗi đau còn lại\\nKhi đã không còn ai\\nVerse 2\\nGiống như con mèo hoang nhìn mây trắng bay\\nGiữa không trung tự do mình em ngồi đấy\\nVẫn vuốt ve từng nỗi buồn đem giấu đi\\nGiấu cho riêng mình em để mãi đi tìm\\nPre chorus\\nTa như loay hoay giữa 4 bức tường\\nTa như soi thân trong tấm gương kia thật lâu, (that lau) thật sâu\\nChorus\\nXin em thôi về trong những giấc mơ đêm nay\\nHôn đôi môi lạnh giá\\nVề lại trong những khung hình\\nGiờ đã trôi rất xa\\nĐừng về trong những giấc mơ đêm nay\\nKhi đã lỡ một dấu chấm hết cho vơi đi, vơi nỗi đau còn lại\\nKhi đã không còn ai\\nx2\\nHook\\nNiềm tin đã mất trong ngày tình đã cất\\nThì xin hãy thứ tha về nhau\\nVà tôi nghĩ chẳng bao giờ em muốn biết\\nTình yêu đó sẽ đi về đâu\\n",
      "mvcode": null
    },
    {
      "id": "14",
      "name": "Hơn cả yêu",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/ducphuc.jpg",
      "singer": "Đức Phúc",
      "link": "https://imusicapi.000webhostapp.com/Music/Hon%20Ca%20Yeu%20-%20Duc%20Phuc.mp3",
      "like": "2",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "35",
      "name": "Bao nhiêu",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/chillies1.jpg",
      "singer": "Chillies",
      "link": "https://imusicapi.000webhostapp.com/Music/Bao%20Nhieu%20-%20Chillies.mp3",
      "like": "1",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    }
  ];
var str2 = [
    {
      "id": "4",
      "name": "Blinding Lights",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/theweeknd.jpg",
      "singer": "The Weeknd",
      "link": "https://imusicapi.000webhostapp.com/Music/Blinding%20Lights%20-%20The%20Weeknd.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "36",
      "name": "Đường chân trời",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/chillies1.jpg",
      "singer": "Chillies",
      "link": "https://imusicapi.000webhostapp.com/Music/Duong%20Chan%20Troi%20-%20Chillies.mp3",
      "like": "1",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "26",
      "name": "Sài Gòn đẹp lắm",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/phuongvy.png",
      "singer": "Phương Vy-Trannom Remix",
      "link": "https://imusicapi.000webhostapp.com/Music/SaiGonDepLamTramomRemix-PhuongVy-6063592.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "15",
      "name": "Khoảng không em",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/nguyentrongtai.jpg",
      "singer": "Nguyễn Trọng Tài",
      "link": "https://imusicapi.000webhostapp.com/Music/Khoang%20Khong%20Em%20-%20Nguyen%20Trong%20Tai.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "8",
      "name": "Daydreams",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/soobin.jpg",
      "singer": "SooBin-BigDaddy-Touliver",
      "link": "https://imusicapi.000webhostapp.com/Music/Daydreams-SOOBIN-BigDaddy-Touliver.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "16",
      "name": "Không sao mà em đây rồi",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/sunihalinh.jpg",
      "singer": "Suni Hạ Linh",
      "link": "https://imusicapi.000webhostapp.com/Music/Khong%20Sao%20Ma%20Em%20Day%20Roi%20-%20Suni%20Ha%20Linh_.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "2",
      "name": "Nàng thơ",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/hoangdung.jpg",
      "singer": "Hoàng Dũng",
      "link": "https://imusicapi.000webhostapp.com/Music/Nang%20Tho%20-%20Hoang%20Dung.mp3",
      "like": "80",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "17",
      "name": "Lạ lùng",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/vu.jpg",
      "singer": "Vũ",
      "link": "https://imusicapi.000webhostapp.com/Music/La%20Lung%20-%20Vu.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "25",
      "name": "Sài Gòn đau lòng quá",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/huakimtuyen.jpg",
      "singer": "Hứa Kim Tuyền-Hoàng Duyên",
      "link": "https://imusicapi.000webhostapp.com/Music/Sai%20Gon%20Dau%20Long%20Qua%20-%20Hua%20Kim%20Tuyen_%20Ho.mp3",
      "like": "50",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "31",
      "name": "Vì yêu cứ đâm đầu Remix",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/min.jpg",
      "singer": "Min-Đen Vâu-Justatee",
      "link": "https://imusicapi.000webhostapp.com/Music/ViYeuCuDamDauCukakRemix-MINJustaTeeDen-6150823.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "13",
      "name": "Giá như",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/chillies.jpg",
      "singer": "Chillies",
      "link": "https://imusicapi.000webhostapp.com/Music/Gia%20Nhu%20-%20Chillies.mp3",
      "like": "40",
      "lyric": "Verse 1\\nGiá như không phải nói một câu giá như\\nTrái tim này tặng em từ đầu được chứ\\nThấy những khung hình quay đều như cuốn phim\\nThấy em sao buồn tênh lặng lẽ đi tìm\\nPre\\nTa như loay hoay giữa 4 bức tường\\nTa như soi thân trong tấm gương kia thật lâu, (that lau) thật sâu\\nChorus\\nXin em thôi về trong những giấc mơ đêm nay\\nHôn đôi môi lạnh giá\\nVề lại trong những khung hình\\nGiờ đã trôi rất xa\\nĐừng về trong những giấc mơ đêm nay\\nKhi đã lỡ một dấu chấm hết cho vơi đi, vơi nỗi đau còn lại\\nKhi đã không còn ai\\nVerse 2\\nGiống như con mèo hoang nhìn mây trắng bay\\nGiữa không trung tự do mình em ngồi đấy\\nVẫn vuốt ve từng nỗi buồn đem giấu đi\\nGiấu cho riêng mình em để mãi đi tìm\\nPre chorus\\nTa như loay hoay giữa 4 bức tường\\nTa như soi thân trong tấm gương kia thật lâu, (that lau) thật sâu\\nChorus\\nXin em thôi về trong những giấc mơ đêm nay\\nHôn đôi môi lạnh giá\\nVề lại trong những khung hình\\nGiờ đã trôi rất xa\\nĐừng về trong những giấc mơ đêm nay\\nKhi đã lỡ một dấu chấm hết cho vơi đi, vơi nỗi đau còn lại\\nKhi đã không còn ai\\nx2\\nHook\\nNiềm tin đã mất trong ngày tình đã cất\\nThì xin hãy thứ tha về nhau\\nVà tôi nghĩ chẳng bao giờ em muốn biết\\nTình yêu đó sẽ đi về đâu\\n",
      "mvcode": null
    },
    {
      "id": "24",
      "name": "Phía sau một cô gái",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/soobin.jpg",
      "singer": "Soobin",
      "link": "https://imusicapi.000webhostapp.com/Music/Phia%20Sau%20Mot%20Co%20Gai%20-%20Soobin%20Hoang%20Son.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "40",
      "name": "Anh nhà ở đâu thế",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/amee1.jpg",
      "singer": "AMEE",
      "link": "https://imusicapi.000webhostapp.com/Music/Anh_Nha_O_Dau_The.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "39",
      "name": "Qua khung cửa sổ",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/chillies1.jpg",
      "singer": "Chillies",
      "link": "https://imusicapi.000webhostapp.com/Music/Qua%20Khung%20Cua%20So%20-%20Chillies.mp3",
      "like": "1",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "1",
      "name": "Hongkong1",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/nguyentrongtai.jpg",
      "singer": "Nguyễn Trọng Tài",
      "link": "https://imusicapi.000webhostapp.com/Music/hongkong1.mp3",
      "like": "60",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "14",
      "name": "Hơn cả yêu",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/ducphuc.jpg",
      "singer": "Đức Phúc",
      "link": "https://imusicapi.000webhostapp.com/Music/Hon%20Ca%20Yeu%20-%20Duc%20Phuc.mp3",
      "like": "2",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "3",
      "name": "Big City Boi",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/binz.jpg",
      "singer": "Binz",
      "link": "https://imusicapi.000webhostapp.com/Music/Big%20City%20Boi%20-%20Binz_%20Touliver.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "37",
      "name": "Mascara",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/chillies1.jpg",
      "singer": "Chillies",
      "link": "https://imusicapi.000webhostapp.com/Music/Mascara%20-%20Chillies.mp3",
      "like": "1",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "6",
      "name": "Chúng ta không thuộc về nhau",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/sontungmtp.jpg",
      "singer": "Sơn Tùng M-TP",
      "link": "https://imusicapi.000webhostapp.com/Music/Chung%20Ta%20Khong%20Thuoc%20Ve%20Nhau%20-%20Son%20Tung.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    },
    {
      "id": "27",
      "name": "Sao anh chưa về nhà",
      "img": "https://imusicapi.000webhostapp.com/Image/Song/amee.jpg",
      "singer": "AMEE",
      "link": "https://imusicapi.000webhostapp.com/Music/Sao%20Anh%20Chua%20Ve%20Nha%20-%20AMEE_%20Ricky%20Star.mp3",
      "like": "0",
      "lyric": "Và giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nTrái tim mình nói không nên lời\\nĐắng cay từng tiếng yêu xa vời\\nThế là...\\nVà hôm nay em đến\\nNhưng nắng đâu còn thiết tha gọi mời\\nGió âm thầm lướt qua muôn đời\\nVì ai vì ai\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nNếu...\\nĐóa hoa hồng trước kia trở về\\nNhánh hương tình thoảng trên câu thề\\nAnh ước rằng...\\nRằng một mai anh đến\\nAnh đón em vào sớm mai trong lành\\nNhưng đó mãi là giấc mơ không thành\\nVì ai vì ai\\nVà giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nEm đã trao ai\\nDòng lệ tràn đầy cầu kì\\nNhững năm tháng phai nhòa\\nVì giờ anh biết\\nChuyện tình mình chẳng còn gì\\nKhi nắng xuân sang\\nLời mật ngọt còn thầm thì\\nEm bước sang ngang\\nĐợi chờ một điều diệu kì\\nNhư lúc ban đầu\\nVà giờ em khóc\\nThì cũng chẳng để làm gì\\nĐâu phải cho anh\\nChuyện tình mình mà là vì\\nNước mắt em rơi\\nDòng lệ tràn đầy cầu kì\\nVì em vì em\\n",
      "mvcode": null
    }
  ];
  fetch('https://imusicapi.000webhostapp.com/Server/songrandom.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        
        str2=data;
        console.log(str2);
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });
  fetch('https://imusicapi.000webhostapp.com/Server/songlove.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        str1=data;
        console.log(str1);
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });
  //var listSongRoom1 = JSON.parse(str.toString());
  var listAudioRoom1 = [];
  var listAudioRoom2 = [];
  var listInfoUserInRoom = [];
  var listRequestRoom1 = [];
  //str.forEach(element => listRequestRoom1.push(0));
  //str2.forEach(element => listRequestRoom2.push(0));
  var listRequestRoom2 = [];
  var user ;
  class InfoUserInRoom{
      constructor(room,userid){
        this.room = room;
        this.userid = userid;
      }
  }
  str.forEach(function addAudio(element){
    console.log(element);
    listAudioRoom1.push(new Audio(element.link));
    listRequestRoom1.push(0);
  });

  str2.forEach(function addAudio(element){
    console.log(element);
    listAudioRoom2.push(new Audio(element.link));
    listRequestRoom2.push(0);
  });

var position = 0;
var positonnextsong = -1;
var positionnextsong2 = -1;
var audioCurrent = listAudioRoom1[position];
var position2 = 0;
var audioCurrent2 = listAudioRoom2[position2];
var PlayNextSong = function(){
    // position++;
    // if(position > listAudioRoom1.length-1){
    //     position = 0;
    // }
    if(positonnextsong === -1){
      position = Math.floor(Math.random() * listAudioRoom1.length);
      console.log(position);
    }else{
      position = positonnextsong;
      positonnextsong = -1;
    }
    audioCurrent = listAudioRoom1[position];
    audioCurrent.play();
    $('#titleroom1').text(str[position].name);
    socket.emit('nextsong',{
        name: str[position].name,
        singer: str[position].singer,
        link:str[position].link,
        timecurrent:audioCurrent.currentTime,
        image: str[position].img,
        room: 1
    });
    listRequestRoom1 = [];
    str.forEach(element => listRequestRoom1.push(0));
    socket.emit('returnlistrequest',{data:listRequestRoom1,room:1});
};
var PlayNextSong2 = function(){
    // position2++;
    // if(position2 > listAudioRoom2.length-1){
    //     position2 = 0;
    // }
    // if(audioCurrent2 === listAudioRoom2[position2]){
    //   position2 = Math.floor(Math.random() * listRequestRoom2.length);
    // }
    if(positionnextsong2 === -1){
      position2 = Math.floor(Math.random() * listAudioRoom2.length);
      console.log(position2);
    }else{
      position2 = positionnextsong2;
      positionnextsong2 = -1;
    }
    audioCurrent2 = listAudioRoom2[position2];
    audioCurrent2.play();
    $('#titleroom2').text(str2[position2].name);
    socket.emit('nextsong',{
        name: str2[position2].name,
        singer: str2[position2].singer,
        link:str2[position2].link,
        timecurrent:audioCurrent2.currentTime,
        image: str2[position2].img,
        room: 2
    });
    listRequestRoom2 = [];
    str2.forEach(element => listRequestRoom2.push(0));
    socket.emit('returnlistrequest',{data:listRequestRoom2,room:2});
};
//listen thread event
socket.on('thread', function (data) {
    user = JSON.parse(data);
    listInfoUserInRoom.push(new InfoUserInRoom(user.room,user.userid));
    console.log('vao thread');
    console.log(data);
    if(user.room == 1){
        socket.emit('clientsend',{
            name: str[position].name,
            singer: str[position].singer,
            link:str[position].link,
            timecurrent:audioCurrent.currentTime,
            image: str[position].img,
            userid: user.userid,
            room: user.room
        });
        socket.emit('allsonginroom',{data:str,room:user.room,requests:listRequestRoom1});
    }else if(user.room == 2){
        socket.emit('clientsend',{
            name: str2[position2].name,
            singer: str2[position2].singer,
            link:str2[position2].link,
            timecurrent:audioCurrent2.currentTime,
            image: str2[position2].img,
            userid: user.userid,
            room: user.room
        });
        socket.emit('allsonginroom',{data:str2,room:user.room,requests:listRequestRoom2});
    }
    //$('#thread').append('<li>' + data + '</li>')
});
socket.on('requestfromserver', function (data) {
  var info = JSON.parse(data);
  console.log(info);
  if(info.room == 1){
    var index = str.findIndex((element) => element.id === info.userid);
    console.log(index);
    listRequestRoom1[index]++;
    console.log(listRequestRoom1[index]);
    positonnextsong = listRequestRoom1.findIndex((element) => element === Math.max(...listRequestRoom1));
    socket.emit('returnlistrequest',{data:listRequestRoom1,room:info.room});
  }else if(info.room == 2){
    var index = str2.findIndex((element) => element.id === info.userid);
    console.log(index);
    listRequestRoom2[index]++;
    positionnextsong2 = listRequestRoom2.findIndex((element) => element === Math.max(...listRequestRoom2));
    socket.emit('returnlistrequest',{data:listRequestRoom2,room:info.room});
  }

});
    
// });

$('#btn1').click(function(){
    audioCurrent.play();
    $('#titleroom1').text(str[position].name);
    setInterval(
        () => {
            socket.emit('checkdata',audioCurrent.currentTime)
            if(audioCurrent.currentTime == audioCurrent.duration){
                PlayNextSong();
            }
        },
        1000
      );
});
$('#btn2').click(function(){
    audioCurrent2.play();
    $('#titleroom2').text(str2[position2].name);
    setInterval(
        () => {
            socket.emit('checkdata2',audioCurrent2.currentTime)
            if(audioCurrent2.currentTime == audioCurrent2.duration){
                PlayNextSong2();
            }
        },
        1000
      );
});
$('#btnsend1').click(function(){
    //var message = $('#message').val();
    audioCurrent.currentTime = audioCurrent.duration;
    
});
$('#btnsend2').click(function(){
  //var message = $('#message').val();
  audioCurrent2.currentTime = audioCurrent2.duration;
  
});


