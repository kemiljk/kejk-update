import Vuex from "vuex";
import Request from "~/common/request";

export const state = () => ({
  blogs: {},
  blog: {},
});

export const getters = {
  getBlogPage(state) {
    return state.pages.blog;
  },
  getBlog(state) {
    return state.blogs;
  },
  getSelectedBlog(state) {
    return state.blog;
  },
};

export const mutations = {
  SET_BLOG: (state, payload) => {
    state.pages.blog = payload;
  },
  SET_BLOGS: (state, payload) => {
    state.blogs = payload;
  },
  SET_SELECTED_BLOG: (state, payload) => {
    state.blog = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const BlogsResponse = await Request.getBlogs();
    const Blogs = BlogsResponse.objects;
    if (Blogs) {
      commit("SET_BLOGS", Blogs);
    }
  },
  getBlog(context, payload) {
    this.state.blogs.forEach((element) => {
      if (element.slug == payload) {
        context.commit("SET_SELECTED_BLOG", element);
      } else {
        context.commit("SET_SELECTED_BLOG", null);
      }
    });
  },
};

export const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });
};
