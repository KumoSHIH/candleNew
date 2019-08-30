<template>
  <div>
    <div class="container pt-5">
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-md-8 text-center titleTop">
          <h2 class="col-12 text-center text-main mt-4 mt-md-0">8月優惠活動</h2>
          <hr>
          <div>
            <h6 class="text-main"><i class="fas fa-sun mr-2"></i>新加入會員首次購物享95折。</h6>
            <h6 class="text-main"><i class="fas fa-sun mr-2"></i>當月壽星結帳可再折扣NT $50。</h6>
            <h6 class="text-main"><i class="fas fa-sun mr-2"></i>結帳額滿指定價格可使用以下優惠券！</h6>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center my-3">
        <div class="col-7 col-md-4 wrap text-center py-2">
          <div class="dashLine text-center">
            <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
            <p class="h6 mt-3">結帳金額滿 999 (含)以上</p>
            <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
          </div>
        </div>
        <div class="col-4 col-md-2 code text-center">
          <div class="h1 mt-4 text-danger">
            <strong>9折</strong>
          </div>
          <div class="text-white">結帳時請輸入優惠碼</div>
          <div class="h6 text-danger mt-2">
            <strong>candle90</strong>
          </div>
        </div>
        <div class="grad"></div>
      </div>
      <div class="row d-flex justify-content-center my-5">
        <div class="col-7 col-md-4 wrap text-center py-2">
          <div class="dashLine text-center">
            <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
            <p class="h6 mt-3">結帳金額滿 1399 (含)以上</p>
            <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
          </div>
        </div>
        <div class="col-4 col-md-2 code text-center">
          <div class="h1 mt-4 text-danger">
            <strong>8折</strong>
          </div>
          <div class="text-white">結帳時請輸入優惠碼</div>
          <div class="h6 text-danger mt-2">
            <strong>candle80</strong>
          </div>
        </div>
        <div class="grad" id="service"></div>
      </div>
      <div class="row d-flex justify-content-center titleTop">
        <div class="col-md-8 text-center ">
          <h2 class="text-main mt-4 mt-md-0">顧客服務</h2>
          <hr>
          <h6 class="text-main">運送方式</h6>
          <p class="text-dark">提供超商店到店、郵寄、宅配。</p>
          <h6 class="text-main">付款方式</h6>
          <p>提供線上刷卡、專屬轉帳帳號，暫不提供到貨付款。</p>
          <h6 class="text-main">會員優惠</h6>
          <p>每月都有指定優惠，請定期關注！</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center titleTop mb-5">
        <div class="col-md-8 text-center">
          <h2 class="text-main mt-4 mt-md-0" id="about">關於我們</h2>
          <hr>
          <h6 class="text-main">實體店面</h6>
          <p>台中市安安區好好路一段111號</p>
          <h6 class="text-main">一般問題</h6>
          <p>不接受緊急訂單，若訂單在製作中，不接受退訂，請您諒解。忙碌中若無回覆，請耐心等待，我們將盡快為您服務。</p>
          <h6 class="text-main">人才招募</h6>
          <p>誠徵門市人員：上班時間 10:00~19:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  background-color: #f6e5e5;
  width: 500px;
}
.dashLine {
  border: dashed 2px #ca3e47;
}
.code {
  position: relative;
  background-color: #ff9776;
  cursor: pointer;
}
.grad {
  box-sizing: border-box;
  width: 5px;
  background-size: 10px 15px;
  background-image: radial-gradient(
    transparent 0px,
    transparent 3px,
    rgb(255, 151, 118) 3px,
    rgb(255, 151, 118)
  );
  background-position: 0 7px;
}
</style>
