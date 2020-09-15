const state = {
  user: null,
  user_token: "",
  lastMusic: "",
};

const mutations = {
  add_user(state, data) {
    state.user = data;
    state.user_token = data.token;
  },

  logout(state) {
    state.user = null;
    state.user_token = null;
  },

  add_music(state, data) {
    state.lastMusic = data;
  },
};

const actions = {
  add_music({ commit }, data) {
    console.log(data);
    commit("add_music", data);
  },

  add_user({ commit }, data) {
    console.log(data);
    commit("add_user", data);
  },

  logout({ commit }) {
    commit("logout");
  },
};

export default {
  state,
  mutations,
  actions,
};
