<template>
  <ul class="footer">
    <li>
      <RouterLink to="#">
        <img src="../../assets/images/bookmark.png" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/messages">
        <img src="../../assets/images/message.png" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/app">
        <img src="../../assets/images/explore.png" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/artists">
        <img src="../../assets/images/search.png" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#">
        <img src="../../assets/images/menu-bar.png" />
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.footer {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  background: black;
  height: 50px;
}

.footer li {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footer li a {
  text-decoration: none;
  color: white;
}
</style>
