<script lang="ts">
    import { House } from "lucide-svelte"
</script>

<div class="navbar bg-base-500">  
    <div class="flex-1">
      <a href="https://lucide.dev/icons/house" class="btn btn-ghost text-xl"><House></House></a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://i.pinimg.com/736x/df/2b/e1/df2be1341c30e0ddbbe51ab25fb8709f.jpg" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a href="ola">Settings</a></li>
          <li><a href="ola">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>