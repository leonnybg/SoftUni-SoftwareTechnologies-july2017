using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(L23CSharp_ASPNet.Startup))]
namespace L23CSharp_ASPNet
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
