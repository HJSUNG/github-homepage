<script>
export default {
  name: 'ModernJavascript01'
}
</script>

<template>
  <div class="container-xxl d-flex flex-column h-100" style="gap:15px">
    <v-card
      variant="elevated"
      elevation="5"
      title="프로그래밍이란?"
      subtitle="컴퓨터에게 실행을 요구하는 커뮤니케이션"
    >

      <ul>
        <li><span>- 컴퓨터에게 정확하고 상세하게 요구사항을 설명하는 것</span></li>
        <li><span>- 복잡한 요구사항을 분해/구분해야 함 </span></li>
        <li><span class="highlight pink">- 요구사항의 집합을 분석 → 적절한 자료구조 & 함수의 집합으로 변환 → 흐름을 제어하는 것</span></li>
        <li><span >- 상태, 판단기준, 처리방식 등이 수치화 되어야 함</span></li>
      </ul>
    </v-card>

    <v-card
      variant="elevated"
      elevation="5"
      title="컴파일러 / 인터프리터"
      subtitle="사람이 이해할 수 있는 약속된 구문으로 작성하고, 이를 기계어로 번역"
    >

      <ul>
        <li><span>- 사람이 기계어로 직접 명령을 전달하는 것은 어려움</span></li>
        <li><span class="highlight pink">- 사람이 이해할 수 있는 약속된 구문으로 작성하고, 이를 기계어로 번역 </span></li>
         </ul>
    </v-card>



  </div>

</template>

<style scoped>

</style>